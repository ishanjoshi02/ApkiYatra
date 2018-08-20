import pandas as pd
import xlrd

print('Enter your source destination')
source = input()

print('Enter your destination')
destination = input()

print(source)
print(destination)


df = pd.read_csv('Report_01_JUL_2018.csv')
#print(df.head())
sourcedf = df.loc[(df['Origin Bus Stop Name'] == source)]
destinationdf = sourcedf.loc[sourcedf['Destination Bus Stop Name'] == destination])
