

def input_to_array(filename: str):
    textFile = open(filename, "r")
    numArray = textFile.read().split('\n')

    print(numArray[1])
    return numArray

input_to_array("./input.txt")