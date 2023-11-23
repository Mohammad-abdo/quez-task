const announcements = require("../Models/announcements.js");
const { query } = require("express");
const ApiFeatures = require("../Utils/apiFeatures.js");
const ApiError = require("../Utils/appError");


exports.Saveannouncements = async function (req, res) {
  try {
    const newannouncements = await announcements.create(req.body);
    res.status(201).json({ status: "success", data: { announcements: newannouncements } });
  } catch (error) {
    res
    .status(404)
    .json({
      status: "failed",
      message: "Failed to save the announcements",
      error: error.message,
    });
  }
};

exports.Getannouncements = async function (req, res) {
  try {
    const myannouncements = await announcements.findById(req.params.id);
    res.status(200).json({ status: "success", data: { announcements: myannouncements } });
  } catch (error) {
    res
    .status(404)
    .json({
      status: "failed",
      message: "Failed to get  any announcements",
      error: error.message,
    });
  }
};

exports.deleteannouncements = async function (req, res) {
  try {
    await announcements.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success" });
  } catch (error) {
    res
    .status(404)
    .json({
      status: "failed",
      message: "Failed to delete the announcements",
      error: error.message,
    });
  }
};

exports.GetAllannouncementss = async function (req, res) {
  try {
    const features = new ApiFeatures(announcements.find(), req.query)
      .filter()
      .limitFields()
      .sort()
      .pagination();

    const announcementss = await features.query;

    res.status(200).json({
      status: "success",
      results: announcementss.length,
      data: { announcementss: announcementss },
    });
  } catch (error) {
    res
      .status(404)
      .json({
        status: "failed",
        message: "Failed to get  any announcementss",
        error: error.message,
      });
  }
};


exports.updateannouncements = async function (req, res) {
  try {
    const update = await announcements.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: { update: update },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to update the announcements",
      error: error.message,
    });
  }
};