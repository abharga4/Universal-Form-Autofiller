# Universal-Form-Autofiller

Overview

The Universal Form Autofill Chrome Extension is a productivity tool designed to simplify the process of completing online forms. Users can create reusable templates that store their responses to various forms and apply them later to autofill text-based fields. This extension enhances efficiency and usability by offering customizable, secure, and easy-to-use autofill functionality.
Features

    Form Detection: Automatically identifies text fields and tracks user input during "Detect Mode."
    Template Management:
        Create, edit, and delete templates for different forms.
        Store templates locally and securely.
    Autofill Functionality:
        Automatically fill text fields using stored templates.
        Display a non-intrusive popup for autofill suggestions.
        Allow manual mapping of unmatched fields.
    Data Security:
        Local storage for user data.
        Data encryption to protect sensitive information.
    Cross-Browser Compatibility:
        Works on any form across the web.

Installation

    Clone the repository to your local machine:

    git clone https://github.com/your-repo/universal-form-autofill.git

    Open Google Chrome and navigate to chrome://extensions/.
    Enable Developer Mode (toggle in the top-right corner).
    Click Load unpacked and select the cloned project folder.
    The extension should now appear in your Chrome toolbar.

Usage

    Detect Mode:
        Navigate to a form you want to scan.
        Enable "Detect Mode" to record form fields and your responses.
        Save the responses as a template for future use.

    Autofill Mode:
        Visit a form with matching fields.
        The extension will detect matching templates and suggest autofill options via a popup.
        You can autofill individual fields or the entire form.

    Template Management:
        Open the extension popup.
        View, edit, or delete existing templates.

File Structure

    manifest.json: Defines the extension's permissions, settings, and entry points.
    background.js: Handles template storage, matching logic, and communication with other scripts.
    content.js: Injected into web pages to detect and interact with forms.
    popup.html: User interface for managing templates.
    popup.js: Logic for the popup interface.

Future Enhancements

    Add support for filling out non-text fields (e.g., dropdowns, checkboxes).
    Synchronize templates across devices using cloud storage.
    AI-based matching for improved field detection.

Permissions

This extension requires the following permissions:

    activeTab: To detect and interact with form fields.
    storage: To store user templates locally.

Known Issues

    Dynamic Forms: May not detect fields added after page load without manual intervention.
    Ambiguity in Field Matching: Manual remapping is required for fields with identical labels or no identifiers.
    Security: Templates are encrypted locally but cannot currently be synchronized securely across devices.
