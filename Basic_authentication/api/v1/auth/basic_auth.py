#!/usr/bin/env python3
"""
Basic Authentication inheriting from
Auth
"""
from api.v1.auth.auth import Auth


class BasicAuth(Auth):
    """
    Managing API authentication
    """
    def extract_base64_authorization_header(self, authorization_header: str) -> str:
        """
        Extracts the base64 part of the Authorization
        """
        if authorization_header is None:
            return None
        if not isinstance(authorization_header, str):
            return None
        if not authorization_header.startswith("Basic "):
            return None
        
        return authorization_header.split("Basic ", 1)[1]
