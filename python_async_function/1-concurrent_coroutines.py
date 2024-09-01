#!/usr/bin/env python3
"""
this way on importing is terrible
"""
import asyncio
from typing import List
random_import = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    gross. really gross. dont even know what is going on
    """
    tasks = [random_import(max_delay) for _ in range(n)]

    delays = await asyncio.gather(*tasks)

    return sorted(delays)
