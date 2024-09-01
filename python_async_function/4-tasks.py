#!/usr/bin/env python3
"""
still upset about how to import
"""
import asyncio
from typing import List
task_wait_random = __import__('2-measure_runtime').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    returning the pauses in a sorted way
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    pauses = await asyncio.gather(*tasks)
    return sorted(pauses)