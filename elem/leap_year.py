import datetime 

def leap():
    x = datetime.datetime.now()
    yr = x.year 
    years = []

    while len(years) < 20:
        if yr % 400 == 0 or yr % 4 == 0 and yr % 100 != 0:
            years.append(yr)
        yr += 1

    for y in years:
        print(y)


leap()