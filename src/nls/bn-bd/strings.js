/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "GENERIC_ERROR": "(ত্রুটি {0})",
    "NOT_FOUND_ERR": "এই  /directory ফাইলটি পাওয়া যায়নি।",
    "NOT_READABLE_ERR": "ফাইল /directory পড়া যাবে না।",
    "EXCEEDS_MAX_FILE_SIZE": "{0} MB এর চেয়ে বড় ফাইল {APP_NAME} তে খোলা যাবে না।",
    "FILE_EXISTS_ERR": "ফাইলটি বা ফোল্ডারটি আগে থেকেই আছে।",
    "FILE": "ফাইল",
    "FILE_TITLE": "ফাইল",
    "DIRECTORY": "ফোল্ডার",
    "DIRECTORY_TITLE": "ফোল্ডার",
    "DIRECTORY_NAMES_LEDE": "ফোল্ডারের নাম",
    "FILENAMES_LEDE": "ফাইলের নাম",
    "FILENAME": "ফাইলের নাম",
    "DIRECTORY_NAME": "ফোল্ডারের নাম",
    "OPEN_DIALOG_ERROR": "ওপেন ফাইল ডায়ালগ দেখানোর সময় একটি ত্রুটি ঘটেছে। (ত্রুটি {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "এই <span class='dialog-filename'> {0} </span> ফোল্ডারের কন্টেন্টগুলো পড়ার সময় ত্রুটি ঘটেছিল। (ত্রুটি {1})",
    "ERROR_OPENING_FILE_TITLE": "ফাইল খুলতে ত্রুটি",
    "ERROR_OPENING_FILE": "এই <span class='dialog-filename'>{0}</span> ফাইলটি খোলার সময় ত্রুটি ঘটেছিল। {1}",
    "ERROR_OPENING_FILES": "নিচের ফাইলগুলো খোলার সময় ত্রুটি ঘটেছিল:",
    "ERROR_SAVING_FILE_TITLE": "ফাইল সংরক্ষণ করতে ত্রুটি",
    "ERROR_SAVING_FILE": "এই <span class='dialog-filename'> {0} </span> ফাইলটি সংরক্ষণের সময় ত্রুটি ঘটেছিল। {1}",
    "ERROR_RENAMING_FILE_TITLE": "ফাইল পুনঃনামকরনে ত্রুটি",
    "ERROR_RENAMING_DIRECTORY_TITLE": "ফোল্ডার পুনঃনামকরনে ত্রুটি",
    "ERROR_RENAMING_FILE": "এই <span class='dialog-filename'>{0}</span> ফাইলটি  পুনঃনামকরনের সময় ত্রুটি ঘটেছিল। {1}",
    "ERROR_RENAMING_DIRECTORY": "এই <span class='dialog-filename'>{0}</span> ফোল্ডারটি পুনঃনামকরনের সময় ত্রুটি ঘটেছিল। {1}",
    "ERROR_DELETING_FILE_TITLE": "ফাইল মুছে ফেলতে ত্রুটি",
    "ERROR_DELETING_DIRECTORY_TITLE": "ফোল্ডার মুছে ফেলতে ত্রুটি",
    "ERROR_DELETING_FILE": "<span class='dialog-filename'>{0}</span> ফাইলটি মুছে ফেলার সময় একটি ত্রুটি ঘটেছিলো। {1}",
    "ERROR_DELETING_DIRECTORY": "<span class='dialog-filename'>{0}</span> ফোল্ডারটি মুছে ফেলার সময় একটি ত্রুটি ঘটেছিলো। {1}",
    "INVALID_FILENAME_TITLE": "অবৈধ ফাইলের নাম",
    "INVALID_DIRNAME_TITLE": "অবৈধ ফোল্ডারের নাম",
    "INVALID_FILENAME_MESSAGE": "ফাইলের নাম সিস্টেম সংরক্ষিত কোন শব্দ,ডট(.) দ্বারা শেষ বা নিচের চিহ্ন গুলোর মত হতে পারবেনা : <code class='emphasized'> {1}</code>",
    "INVALID_DIRNAME_MESSAGE": "ফোল্ডারের নাম সিস্টেম সংরক্ষিত কোন শব্দ,ডট(.) দ্বারা শেষ বা নিচের চিহ্ন গুলোর মত হতে পারবেনা : <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "ফাইল বা ফোল্ডার <span class='dialog-filename'>{0}</span> নামে আগেথেকেই আছে।",
    "ERROR_CREATING_FILE_TITLE": "ফাইল তৈরিতে ত্রুটি",
    "ERROR_CREATING_DIRECTORY_TITLE": "ফোল্ডার তৈরিতে ত্রুটি",
    "ERROR_CREATING_FILE": "একটি ত্রুটি ঘটেছে যখন এই <span class='dialog-filename'>{1} </span> ফাইলটি তৈরি করা হয়। {2}",
    "ERROR_CREATING_DIRECTORY": "একটি ত্রুটি ঘটেছে যখন এই <span class='dialog-filename'>{1}</span> ফোল্ডারটি তৈরি করা হয়। {2}",
    "ERROR_MAX_FILES_TITLE": "ফাইল ইনডেক্স করায় ত্রুটি",
    "EXT_MODIFIED_TITLE": "বহিঃস্থ পরিবর্তন",
    "EXT_MODIFIED_WARNING": "{APP_NAME} এর বাহিরের ডিস্কে<span class='dialog-filename'> {0} </span>পরিবর্তিত হয়েছে। <br /><br />আপনি কি ফাইলটি সংরক্ষন করতে চান এবং ওই পরিবর্তনের ওপর ওভাররাইট করতে চান?",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> {APP_NAME} এর বাইরে পরিবর্তিত হয়েছে, এবং {APP_NAME} এর অসংরক্ষিত পরিবর্তন রয়েছে।<br /><br />আপনি কোন সংস্করণটি রাখতে চান?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> {APP_NAME} এর বাইরে মুছে ফেলা হয়েছে, কিন্তু {APP_NAME} এর অসংরক্ষিত পরিবর্তন রয়েছে।<br /><br />আপনি কি পরিবর্তনগুলি রাখতে চান?",
    "CONFIRM_FOLDER_DELETE_TITLE": "মুছে ফেলা নিশ্চিত করুন",
    "CONFIRM_FOLDER_DELETE": "আপনি কি সত্যিই ফোল্ডারটি<span class='dialog-filename'>{0}</span>মুছে ফেলতে চান?",
    "FILE_DELETED_TITLE": "ফাইল মুছে ফেলা হয়েছে",
    "DONE": "সম্পন্ন হয়েছে",
    "OK": "ঠিক আছে",
    "CANCEL": "বাতিল",
    "SAVE_AND_OVERWRITE": "ওভাররাইট",
    "DELETE": "অপসারন",
    "BUTTON_YES": "হ্যাঁ",
    "BUTTON_NO": "না",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "কার্সারের বর্তমান অবস্থানে দ্রুত সম্পাদনার কোন অপশন নেই",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS দ্রুত সম্পাদনা: ক্লাস এর একক নামের উপর কার্সার রাখুন",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS দ্রুত সম্পাদনা: অসম্পূর্ণ ক্লাস আট্ট্রিবিঊট",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS দ্রুত সম্পাদনা: অসম্পূর্ণ আইডি আট্ট্রিবিঊট",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS দ্রুত সম্পাদনা: ট্যাগ, ক্লাস অথবা আইডি এর উপর কার্সার রাখুন",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS টাইমিং ফাংশন দ্রুত সম্পাদনা: অবৈধ শব্দবিন্যাস",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS দ্রুত সম্পাদনা: ফাংশনের নামের উপর কার্সার রাখুন",
    "BUTTON_NEW_RULE": "নতুন নিয়ম",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "কার্সারের বর্তমান অবস্থানের জন্য কোনো কুইক ডকুমেন্টস নেই",
    "CMD_FILE_NEW": "নতুন ফাইল",
    "CMD_FILE_NEW_FOLDER": "নতুন ফোল্ডার",
    "CMD_FILE_RENAME": "পুনঃনামকরন",
    "CMD_FILE_DELETE": "মুছে ফেলুন",
    "CMD_CUT": "কাট",
    "CMD_COPY": "কপি",
    "CMD_PASTE": "পেস্ট",
    "CMD_SELECT_ALL": "সব নির্বাচন",
    "CMD_TOGGLE_QUICK_EDIT": "দ্রুত সম্পাদনা",
    "CMD_TOGGLE_QUICK_DOCS": "জরুরি ডকুমেন্টস",
    "DND_MAX_FILE_SIZE_EXCEEDED": "ফাইল সমর্থিত সর্বোচ্চ আয়তন ছাড়িয়ে গেছে: 3 MB",
    "DND_UNSUPPORTED_FILE_TYPE": "অসমর্থিত ফাইলের ধরণ",
    "DND_ERROR_UNZIP": "unzip করা সম্ভব হয় নি",
    "DND_ERROR_UNTAR": "untar করা সম্ভব হয় নি",
    "DND_SUCCESS_UNZIP_TITLE": "Unzip সফলভাবে সম্পন্ন",
    "DND_SUCCESS_UNTAR_TITLE": "Untar সফলভাবে সম্পন্ন",
    "DND_SUCCESS_UNZIP": "Unzip সফলভাবে সম্পন্ন <b>{0}</b>।",
    "DND_SUCCESS_UNTAR": "Untar সফলভাবে সম্পন্ন <b>{0}</b>।",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "বর্তমান রঙ",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "মূল রঙ",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa ফরম্যাট",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Hex ফরম্যাট",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa ফরম্যাট",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} ({1} বার ব্যবহৃত হয়েছে)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} ({1} বার ব্যবহৃত হয়েছে)",
    "CMD_JUMPTO_DEFINITION": "সংজ্ঞা দেখুন",
    "CMD_SHOW_PARAMETER_HINT": "প্যারামিটার হিন্ট প্রদর্শন",
    "NO_ARGUMENTS": "<no parameters>",
    "DETECTED_EXCLUSION_TITLE": "JavaScript ফাইল ইনফিরেন্স সমস্যা",
    "CMD_ENABLE_QUICK_VIEW": "দ্রুত দেখতে হোভার করুন",
    "DOCS_MORE_LINK": "আরও পড়ুন",
    "UPLOAD_FILES_DIALOG_HEADER": "ফাইল আপলোড",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...অথবা ড্র্যাগ করে এখানে ফাইল রাখুন।",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "সব ঠিক আছে, ফাইল অবমুক্ত করুন!",
    "UPLOADING_INDICATOR": "আপলোড হচ্ছে...",
    "BUTTON_FROM_YOUR_COMPUTER": "আপনার কম্পিউটার থেকে...",
    "TAKE_A_SELFIE": "একটি সেলফি তুলুন...",
    "CMD_MOVE_FILE": "স্থানান্তর করুন...",
    "PROJECT_ROOT": "প্রোজেক্ট রুট",
    "PICK_A_FOLDER_TO_MOVE_TO": "একটি ফোল্ডার নির্বাচন করুন",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "ত্রুটি স্থানান্তর করুন",
    "UNEXPECTED_ERROR_MOVING_FILE": "{0} {1} এ স্থানান্তরের চেষ্টা করার সময় একটি অপ্রত্যাশিত ত্রুটি ঘটেছে।",
    "ERROR_MOVING_FILE_SAME_NAME": "একটি ফাইল অথবা ফোল্ডার {0} নামে ইতিমধ্যে {1} এ বিদ্যমান। অব্যাহত রাখতে নাম পরিবর্তন করুন।"
});
