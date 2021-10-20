class Summator():

    def sum(self, x, y):
        self.x = x
        self.y = y
        result = x + y
        return result

d = Summator()
print(d.sum(1, 3))