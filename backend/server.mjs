import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";

import passport from "passport";
import session from "express-session";
import passportFacebook from "passport-facebook"
const FacebookStrategy = passportFacebook.Strategy;
