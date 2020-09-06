from covid import Covid
cov = Covid()

ranked_ctry_list = [i['name'] for i in cov.list_countries()]

print(ranked_ctry_list)
# country
# cinfriemdd
# active
# death
# rec
# timestamp
