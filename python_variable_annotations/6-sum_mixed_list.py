#!/usr/bin/env python3
"""
importing List and Union to create stuff
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Documenting is awesome and this returns a sum of a list of a float
    """
    return sum(mxd_lst)
