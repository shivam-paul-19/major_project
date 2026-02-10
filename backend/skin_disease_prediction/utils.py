import torch
import torch.nn as nn
import torchvision.transforms as transforms
from torchvision.models import ResNet18_Weights
import torchvision.models as models
import cv2
import numpy as np
from PIL import Image

CONFIDENCE_THRESHOLD = 0.70  # Rejection threshold
CLASS_NAMES = [
    "BA-cellulitis",
    "BA-impetigo",
    "FU-athlete-foot",
    "FU-nail-fungus",
    "FU-ringworm",
    "PA-cutaneous-larva-migrans",
    "VI-chickenpox",
    "VI-shingles"
]

def load_model():
    model = models.resnet18(weights=None)
    model.fc = nn.Linear(model.fc.in_features, len(CLASS_NAMES))
    model.load_state_dict(
        torch.load(
            "skin_disease_prediction/fine_tuned_skin_disease_model_unfrozen.pth",
            map_location=torch.device("cpu")
        )
    )
    model.eval()
    return model

model = load_model()

class ImageTransformer:
    def __init__(self, imagePath):
        self.image = imagePath
    
    def transformForTorch(self):
        image = Image.open(self.image).convert("RGB")
        transform = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225]
            )
        ])

        input_tensor = transform(image).unsqueeze(0)

        return input_tensor

class SkinPredictor:
    def __init__(self, input):
        self.input = input

    def run(self) -> dict:
        transformer = ImageTransformer(self.input)
        input_tensor = transformer.transformForTorch()

        with torch.no_grad():
            outputs = model(input_tensor)
            probs = torch.softmax(outputs, dim=1)[0]
            pred_idx = torch.argmax(probs).item()
            confidence = probs[pred_idx].item()

        if confidence >= CONFIDENCE_THRESHOLD:
            return {
                "status": "certain",
                "result": CLASS_NAMES[pred_idx],
                "confidence": confidence
            }
        else:
            return {
                "status": "uncertain"
            }