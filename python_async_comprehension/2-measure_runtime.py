#!/usr/bin/env python3
"""
Importing the modules
"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """
    Returns float of what time it took to run in parallel
    """
    start = time.time()
    await asyncio.gather(async_comprehension(),
                         async_comprehension(),
                         async_comprehension(),
                         async_comprehension())

    end = time.time()
    total = end - start

    return total
