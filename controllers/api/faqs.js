const Faq = require("../../models/faq");

const dataController = {
  // Index,
  index(req, res, next) {
    Faq.find({}, (err, foundFaqs) => {
      if (err) {
        res.status(400).send({
          msg: err.message,
        });
      } else {
        res.locals.data.faqs = foundFaqs;
        next();
      }
    });
  },
  // Destroy
  destroy(req, res, next) {
    Faq.findByIdAndDelete(req.params.id, (err, deletedFaq) => {
      if (err) {
        res.status(400).send({
          msg: err.message,
        });
      } else {
        res.locals.data.faq = deletedFaq;
        next();
      }
    });
  },
  // Update
  update(req, res, next) {
    Faq.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedFaq) => {
        if (err) {
          res.status(400).send({
            msg: err.message,
          });
        } else {
          res.locals.data.faq = updatedFaq;
          next();
        }
      }
    );
  },
  // Create
  create(req, res, next) {
    Faq.create(req.body, (err, createdFaq) => {
      if (err) {
        res.status(400).send({
          msg: err.message,
        });
      } else {
        res.locals.data.faq = createdFaq;
        next();
      }
    });
  },
  // Edit
  // Show
  show(req, res, next) {
    Faq.findById(req.params.id, (err, foundFaq) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: "Could not find a Faq with that ID",
        });
      } else {
        res.locals.data.faq = foundFaq;
        next();
      }
    });
  },
};

const apiController = {
  index(req, res, next) {
    res.json(res.locals.data.faqs);
  },
  show(req, res, next) {
    res.json(res.locals.data.faq);
  },
};

module.exports = {
  apiController,
  dataController,
};
