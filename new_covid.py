from flask import Flask, render_template, redirect, url_for, request
from covid import Covid
from datetime import datetime

# initialising the name and id arrays of the dataframe
app = Flask(__name__, static_url_path="/static")
cov = Covid()
ctry_list = sorted(cov.list_countries(), key=lambda x: x['name'])
ranked_ctry_list = [i['name'] for i in cov.list_countries()]
name_list = [i['name']
             for i in sorted(cov.list_countries(), key=lambda x:x['name'])]
id_list = [i['id']
           for i in sorted(cov.list_countries(), key=lambda x:x['name'])]


# asking for the country with the index page
@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == "POST":
        name = request.form['ctry_name']
        if name in name_list:
            return redirect(url_for("chartPage", ctry=name))
    else:
        return render_template('index_new.html', clist=ctry_list)


# render the chart and the stats
@app.route('/<ctry>')
def chartPage(ctry):
    # Processing the covid data usin the country name
    data = cov.get_status_by_country_name(ctry)
    # country # confirmed # active # death # rec # timestamp
    name = data['country']
    confirmed = data['confirmed']
    active = data['active']
    deaths = data['deaths']
    recovered = data['recovered']
    time = datetime.fromtimestamp(data['last_update']/1000)
    rank = ranked_ctry_list.index(name)+1
    death_rate = deaths*100 / confirmed
    rec_rate = recovered*100 / confirmed
    #  render the arguments to the html template
    return render_template('detail.html', name=name, confirmed=confirmed, active=active, deaths=deaths, recovered=recovered, time=time, rank=rank, death_rate=round(death_rate, 2), rec_rate=round(rec_rate, 2))


if __name__ == '__main__':
    app.run(debug=True)
