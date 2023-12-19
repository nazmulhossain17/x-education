Welcome to the X-education! This server is designed by Syed Nazmul Hossain.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/nazmulhossain17/x-education.git

   ```

2. Navigate to the project directory:

   ```bash
    cd x-education
   ```

3. Install the project dependencies:
   ```bash
    npm install
   ```

## Description

I have created this api using javascript, nodejs, expressjs and mongodb. In this api first admin have to login then admin can create course, update course and delete course. User can also create account, but if you want to be admin then go to database and edit isAdmin to true. other user can't create course, update course and delete course, they want just show course list.

```bash
    http://localhost:5000/api/v1/all-course/
```

<h4>Anyone can see that course list</h4>
<br>
<h4>Create Course</h4>

```bash
    http://localhost:5000/api/v1/create-course
```

<h4>Update Course</h4>

```bash
    http://localhost:5000/api/v1/update-course/:id
```

<h4>Delete Course</h4>

```bash
    http://localhost:5000/api/v1/delete-course/:id
```
