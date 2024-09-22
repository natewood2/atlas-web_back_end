#!/usr/bin/env python3
"""
Basic Authentication inheriting from
Auth
"""
from api.v1.auth.auth import Auth
from models.user import User
from typing import TypeVar, Tuple
import base64


class BasicAuth(Auth):
    """
    Managing API authentication
    """
    def extract_base64_authorization_header(self,
                                            authorization_header:
                                            str) -> str:
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

    def decode_base64_authorization_header(self,
                                           base64_authorization_header:
                                           str) -> str:
        """
        Decodes the Base64 strings
        """
        if base64_authorization_header is None:
            return None
        if not isinstance(base64_authorization_header, str):
            return None
        try:
            decoded_bytes = base64.b64decode(base64_authorization_header)
            return decoded_bytes.decode('utf-8')
        except (base64.binascii.Error, UnicodeDecodeError):
            return None

    def extract_user_credentials(self,
                                decoded_base64_authorization_header:
                                str) -> Tuple[str, str]:
        """
        Extracts credentials from the decoded base64
        """
        if decoded_base64_authorization_header is None:
            return (None, None)
        if not isinstance(decoded_base64_authorization_header, str):
            return (None, None)
        if ':' not in decoded_base64_authorization_header:
            return (None, None)

        email, password = decoded_base64_authorization_header.split(':', 1)
        return (email, password)

    def user_object_from_credentials(self,
                                    user_email:
                                    str,
                                    user_pwd:
                                    str) -> TypeVar('User'):
        """
        Returns email and password
        """
        if user_email is None or not isinstance(user_email, str):
            return None
        if user_pwd is None or not isinstance(user_pwd, str):
            return None
        try:
            users = User.search({'email': user_email})
        except Exception:
            return None
        if not users:
            return None
        for user in users:
            if user.is_valid_password(user_pwd):
                return user
        return None
