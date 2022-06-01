def caesar_cipher(string, shift_amount):
    result = ""
    for char in string:
        if char.isalpha():
            num = ord(char) + shift_amount
            if ((shift_amount > 0) and ((num > 90 and num < 97) or (num > 122))):
                num -= 26
            elif((shift_amount < 0) and ((num < 65) or (num < 97 and num > 90))):
                num += 26
            char = chr(num)
        result += char
    return result
