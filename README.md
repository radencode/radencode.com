FORMAT: 1A
HOST: https://accounts-socket.orbisfn.io/

# Account Management Sockets API - (AMS)

AMS API is designed to serve frontend clients with realtime updates that have occured within the Account Management platform. It is important to note that AMS does NOT send critical information about the given 
event that has occured. Instead AMS details the event and supplies additional information that may be needed to retrieve the event's data from Account Management's API.

######Example of a use case
A new application has been added to a given firm. Clients that are connected to the following AMS channel: 

`/firm:id/applications/new` 

will receive the following object:

`{ message: 'New application has been created', application_id: 343, timestamp: '12/03/2019 12:34:04 EDT' }`

Then it is up to the client to use the given object to retrive the application data through Account Management's API:

`/api/applications/get`

For Account Management API refer to the following documentation:
https://orbis.dev/api/set/7/account-management-and-onboarding

## Questions Collection [/questions]

### List All Questions [GET]

+ Response 200 (application/json)

        [
            {
                "question": "Favourite programming language?",
                "published_at": "2015-08-05T08:40:51.620Z",
                "choices": [
                    {
                        "choice": "Swift",
                        "votes": 2048
                    }, {
                        "choice": "Python",
                        "votes": 1024
                    }, {
                        "choice": "Objective-C",
                        "votes": 512
                    }, {
                        "choice": "Ruby",
                        "votes": 256
                    }
                ]
            }
        ]

### Create a New Question [POST]

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ Request (application/json)

        {
            "question": "Favourite programming language?",
            "choices": [
                "Swift",
                "Python",
                "Objective-C",
                "Ruby"
            ]
        }

+ Response 201 (application/json)

    + Headers

            Location: /questions/2

    + Body

            {
                "question": "Favourite programming language?",
                "published_at": "2015-08-05T08:40:51.620Z",
                "choices": [
                    {
                        "choice": "Swift",
                        "votes": 0
                    }, {
                        "choice": "Python",
                        "votes": 0
                    }, {
                        "choice": "Objective-C",
                        "votes": 0
                    }, {
                        "choice": "Ruby",
                        "votes": 0
                    }
                ]
            }
