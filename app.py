from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/service')
def service():
    return render_template('service.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
