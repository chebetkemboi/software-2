from flask import Flask, Response, send_from_directory, request
import json

#make new flask app
app = Flask(__name__)

#define end point /home
@app.route("/home")
def serve_home():
    return send_from_directory("static", "index.html")

#define end point /plus
@app.route("/plus")
def calculate_sum():
    #get the argument
    try:
        arguments = request.args
        number1 = float(arguments.get("number1"))
        number2 = float(arguments.get("number2"))
        except (ValueError, TypeError):
        return {"error": "Invalid input"}, 400

        response_data = {
            "number1": number1,
            "number2": number2,
            "result": number1 + number2
        }

        return response_data
    except ValueError:
        response = {
            "error": "Invalid input",
            "status": 400
        }
    json_responses = json.dumps(response)
    htttp_responses = Response(json_responses, status=400, mimetype="application/json")
    return htttp_responses

#error handler 
@app.errorhandler(404)
def page_not_found(error_code):
    response = {
        "message": "invalid endpoint",
        "status": 404

    }
    #make data into json
    json_responses = json.dumps(response)
    #make a response
    htttp_responses = Response(json_responses, status=404, mimetype="application/json")
    return htttp_responses

#start the app
app.run(host="127.0.0.1", port=30000, use_reloader=True)


