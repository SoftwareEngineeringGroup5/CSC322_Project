# from website import create_app

# app = create_app()

# if __name__ == '__main__':
#         app.run(debug=True)

from flask import Flask, render_template
# Define a function to create the Flask application instance
def create_app():
    app = Flask(__name__)

    # Add your Flask application routes and logic here
    @app.route('/')
    def home():
        return render_template('home.html')

    return app

# Call the create_app function to create the Flask application instance
app = create_app()

# Define the main entry point of your application
if __name__ == '__main__':
    # Start the Flask development server
    app.run(debug=True)

