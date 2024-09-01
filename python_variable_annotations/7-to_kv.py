#!/usr/bin/env python3
"""
Remember Tuples?
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    A pretty interesting function.
    A lot going on but basically returns it both as a squared object
    """
    return (k, v**2)
