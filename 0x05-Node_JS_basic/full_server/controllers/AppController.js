/**
 * AppController class.
 *
 * @class
 * @classdesc Represents the controller for the application.
 */
class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
