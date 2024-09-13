#!/usr/bin/env python3
"""
Importing re for to obfuscate the values of
the specified fields within the log line.
"""
import re
from typing import List
import logging


PII_FIELDS = ("name", "phone", "email", "password", "ssn")

class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        """
        initialize, so fields can be redacted
        """
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """ Formatting the log records
        """
        old_message = super().format(record)
        return filter_datum(self.fields,
                            self.REDACTION, old_message,
                            self.SEPARATOR)


def filter_datum(fields: List[str], redaction: str, message: str,
                 separator: str) -> str:
    """
    A Logging function the obfuscates log message
    """
    messages = rf'({("|".join(fields))})=([^;]*?)(?={separator}|$)'
    return re.sub(messages, lambda match: f"{match.group(1)}={redaction}",
                  message)

def get_logger() -> logging.Logger:
    """
    Create and return a logger named user_data
    Hide PII fields please
    """
    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    logger.propagate = False

    handlerforStream = logging.StreamHandler()

    formatter = RedactingFormatter(fields=PII_FIELDS)
    handlerforStream.setFormatter(formatter)

    logger.addHandler(handler)

    return logger
