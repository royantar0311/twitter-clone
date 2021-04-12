## Simplified version of twitter following the acceptance criteria below
   - [x] Users can post tweets which is a text of at most 120 characters.
   - [x] Users can fetch all their tweets. Tweets should be ordered by descending order of creation time.
   - [x] Users can follow or unfollow other users.
   - [x] Users should be able to fetch all tweets from the users they are following. These tweets should also be ordered latest first, i.e tweets tweeted more recently should appear first.
   - [x] Users should be able to add tags to their tweets.
   - [x] Users should be able to find all tweets from themselves or the users they are following with a certain tag.
# Auth

## Sign Up

Route: /auth/signup
Method: POST
Example:
```
request: {
	"username": "username",
	"password": "password",
	"firstName": "firstName",
	"lastName": "lastName",
	"email": "email@email.com"
}
response: 
{
  "message": "success || error message"
}
```

## Log In

Route: /auth/login
Method: POST
Example:
```
request: {
	"email": "royantar1@gmai.com",
	"password": "123456"
}
response: 
{
  "message": "success || error message",
  "token: "token"
}
```

# using import in node
using esm module
```
node -r esm index.js
```

# ref/populate

ref will store an object id only but while searching for a document, populate will also fetch the reffed docs.

# or/and operation in a query mongoose

```
Model.find({ $and: [
   $or: [],
   $and: [
      $or: [],
   ]
]})
```