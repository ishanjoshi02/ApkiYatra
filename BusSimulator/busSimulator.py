import pandas as pd

from datetime import datetime


print('Enter your source destination')
source = input()

print('Enter your destination')
destination = input()

print(source)
print(destination)


df = pd.read_csv('Report_01_JUL_2018.csv')
#print(df.head())
sourcedf = df.loc[(df['Origin Bus Stop Name'] == source)]
destinationdf = sourcedf.loc[sourcedf['Destination Bus Stop Name'] == destination]
print(destinationdf)


##print(destinationdf['Boarding Time'].str.split(' ', expand=True))


destinationdf['boardingdate'] = destinationdf['Boarding Time'].str.split(' ').str.get(0)
destinationdf['boardingtime'] = destinationdf['Boarding Time'].str.split(' ').str.get(1)

destinationdf['deboardingdate'] = destinationdf['Deboarding Time'].str.split(' ').str.get(0)
destinationdf['deboardingtime'] = destinationdf['Deboarding Time'].str.split(' ').str.get(1)

current_time = datetime.now().strftime('%H:%M')

print(destinationdf['boardingdate'])
print(destinationdf['boardingtime'])

iend = len(destinationdf)
##
##
##print(destinationdf['boardingtime'][0])
##print(destinationdf['boardingtime'][1])
##print(destinationdf['boardingtime'][2625])
##print(destinationdf['boardingtime'][3])
##print(destinationdf['boardingtime'][4])
##print(destinationdf['boardingtime'][5])






for i in range(0, iend):
    print(destinationdf['boardingtime'][i])

    
    
##    if(destinationdf['boardingtime'][i] > current_time):
##        eta = destinationdf['deboardingtime'][i] - destinationdf['boardingtime'][i]
##    else:
##        print('Unavailable to calculate eta')
    

                              
##starttime = destinationdf['Boarding Time'][0]
##print(starttime)
##
##endtime = destinationdf['Deboarding Time'][0]
##print(endtime)
##
##ETA = endtime - starttime
##print(ETA)
