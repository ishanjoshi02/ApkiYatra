import pandas as pd

df = pd.read_csv('Bus Route Trip Data.csv')
df = df[pd.notnull(df['Actual Trip Start time'])]
##print(df.head())
df.to_csv('cleaneddata.csv', sep=',')
