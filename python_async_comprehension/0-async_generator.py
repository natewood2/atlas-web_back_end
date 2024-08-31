#!/usr/bin/env python3
"""
Documenting Module, I think this works?
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    This will loop 10 times, waiting 1 second then yield a random number.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
