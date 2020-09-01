from flask import Flask, render_template, redirect, url_for, request
from covid import Covid
app = Flask(__name__, static_url_path="/static")
cov = Covid()
ctry_list = sorted(cov.list_countries(), key=lambda x: x['name'])
name_list = [i['name']
             for i in sorted(cov.list_countries(), key=lambda x:x['name'])]
id_list = [i['id']
           for i in sorted(cov.list_countries(), key=lambda x:x['name'])]


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == "POST":
        name = request.form['ctry_name']
        if name in id_list:
            return redirect(url_for("chartPage", ctry=name))
    else:
        return render_template('index.html', clist=ctry_list)


@app.route('/<ctry>')
def chartPage(ctry):
    return render_template('detail.html', ctry=ctry)


if __name__ == '__main__':
    app.run(debug=True)
