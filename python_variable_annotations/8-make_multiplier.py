#!/usr/bin/env python3
"""
Gotta document!
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    adding documentation to the muplier
    """
    def multiply(num: float) -> float:
        return num * multiplier
    return multiply
