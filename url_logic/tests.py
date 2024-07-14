from django.test import TestCase
from .models import CustomUrl


class CustomUrlTestCase(TestCase):
    def test_generate_random_custom_url(self):
        # Generate random URL
        custom_url = CustomUrl.generate_random_custom_url()

        # Verifies that the len is 4
        self.assertEqual(len(custom_url), 4)

        # Verify that it has only lowercase letters
        self.assertTrue(custom_url.islower())
        self.assertTrue(custom_url.isalpha())

        # Verify that the URL is unique in the database
        self.assertFalse(
            CustomUrl.objects.filter(custom_url=custom_url).exists()
        )

        # Create a CustomUrl instance with the generated URL
        new_url = CustomUrl(url='http://example.com', custom_url=custom_url)
        new_url.save()

        # Generate another random custom URL
        another_custom_url = CustomUrl.generate_random_custom_url()

        # Verify that the new generated URL is different
        self.assertNotEqual(custom_url, another_custom_url)
        self.assertFalse(
            CustomUrl.objects.filter(custom_url=another_custom_url).exists()
        )
