/**
 * Think of this file as a database for this application.
 * Make sure all data floating into the app is refered from here only.
 */
export const Videos = [
    { 
        'id': 'Video#1',
        'url': 'http://localhost:3001/footage1.mp4',
        'title': 'Less traffic video',
        'description': 'A video snippet from a typical departmental store on weekdays',
        'captured_on': new Date("8/10/2018")
    },
    { 
        'id': 'Video#2',
        'url': 'http://localhost:3001/footage2.mp4',
        'title': 'Moderate traffic video',
        'description': 'A video snippet from a typical departmental store on weekends',
        'captured_on': new Date("02/23/2016")
    },
    { 
        'id': 'Video#3',
        'url': 'http://localhost:3001/footage3_black_friday.mp4',
        'title': 'High traffic video',
        'description': 'A video snippet from a typical departmental store on BLACK FRIDAY.',
        'captured_on': new Date("11/22/2017")
    }
]

export const Genders = {
    'Male': 'male',
    'Female': 'female'
}

export const SampleResult = [
    {
        'id': Videos[0]['id'],
        'head_count': 3,
        'demographics': [{
            'id': 'person_1',
            'gender': Genders.Male,
            'age': 43
        }, {
            'id': 'person_2',
            'gender': Genders.Female,
            'age': 21
        },{
            'id': 'person_3',
            'gender': Genders.Female,
            'age': 23

        }]
    },
    {
        'id': Videos[1]['id'],
        'head_count': 5,
        'demographics': [{
            'id': 'person_1',
            'gender': null,  // not able to detect if it's a boy or girl, probably back camera, blurr images etc. are possible reasons.
            'age': null
        }, {
            'id': 'person_2',
            'gender': Genders.Female,
            'age': 43
        },{
            'id': 'person_3',
            'gender': Genders.Female,
            'age': 54

        },{
            'id': 'person_4',
            'gender': Genders.Male,
            'age': 43

        },{
            'id': 'person_5',
            'gender': Genders.Male,
            'age': 71

        }]
    },
    {
        'id': Videos[2]['id'],
        'head_count': 7,
        'demographics': [{
            'id': 'person_1',
            'gender': Genders.Male,
            'age': 14
        }, {
            'id': 'person_2',
            'gender': Genders.Female,
            'age': 32
        },{
            'id': 'person_3',
            'gender': Genders.Female,
            'age': 28

        },{
            'id': 'person_4',
            'gender': Genders.Female,
            'age': 8

        },{
            'id': 'person_5',
            'gender': Genders.Male,
            'age': 31
        }]
    }
]

export const Images = [
    {
        "url": "http://localhost:3001/male_icon.png",
        "type": 'male'
    },
    {
        'url': "http://localhost:3001/female_icon.png",
        "type": 'female'
    }
]

export const Video_Thumbnail = 'http://addplaybuttontoimage.way4info.net/Images/Icons/19.png'
