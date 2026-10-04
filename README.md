# Snowflake Experiment App

## Background & Motivation

Snowflake App Runtime makes it possible to build full-scale web applications directly within Snowflake. However, there is still room to explore best practices for integrating web application development, Snowflake objects, and CI/CD into a cohesive workflow.

This repository experiments with those patterns using Next.js, Snowflake DCM, and GitHub Actions, with the goal of developing practical approaches organizations can adopt.

AI makes it easier than ever to generate working applications, but **working software isn't necessarily maintainable software**. Poor repository organization and architectural decisions can create significant technical debt as applications scale and support more business processes. When critical applications go down, the business feels the impact.

The goal is to explore how to build applications that are not only AI-assisted, but also well-structured, maintainable, and reliable over the long term.

## Purpose

Establish a simple, repeatable approach to managing application code and Snowflake objects within a single repository, with automated deployments across development, test, and production environments.

## Principles & Rules

* **Development isolation:** Developers only access development roles, objects, and environments.
* **Automated promotions:** GitHub Actions and service accounts deploy changes to test and production.
* **Role-based access:** Snowflake privileges are managed through database roles.
* **Infrastructure separation:** A separate [snowflake-infrastructure](https://github.com/kyrie0126/snowflake-infrastructure) repository manages database schemas and database roles, following the same access and deployment principles.
* **Maintainability first:** Establish clear repository structure, ownership boundaries, and deployment practices that support long-term application reliability.