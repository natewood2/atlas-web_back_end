#!/usr/bin/env python3
"""
Importing re for to obfuscate the values of
the specified fields within the log line.
"""
import re
from typing import List

def filter_datum(fields: List[str], redaction: str, message: str, separator: str) -> str:
    """
    A Logging function the obfuscates log message
    """
    return re.sub(rf'({separator})({"|".join(fields)}){separator}[^;]*',
                  lambda m: f'{m.group(1)}{m.group(2)}{separator}{redaction}',
                  message)
