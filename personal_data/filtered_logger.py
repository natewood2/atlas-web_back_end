#!/usr/bin/env python3
"""
Importing re for to obfuscate the values of
the specified fields within the log line.
"""
import re

def filter_datum(fields, redaction, message, separator):
    return re.sub(rf'({separator})({"|".join(fields)}){separator}[^;]*', lambda m: f'{m.group(1)}{m.group(2)}{separator}{redaction}', message)
