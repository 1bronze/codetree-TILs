class User:
    def __init__(self, name, score):
        self.name = name
        self.score = score

people = []

for _ in range(5):
    name, score = input().split()
    people.append( User(name, int(score)) )
    
people.sort(key=lambda x: x.score)

people1 = people[0]

print(people[0].name, people[0].score)