#!/usr/bin/env python3
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    This will loop 10 times, waiting 1 second then yield a random number.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10) 
