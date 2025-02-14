// N meeting in one room 
// You are given timings of n meetings in the form of 
// (start[i], end[i]) where start[i] is the start time
//  of meeting i and end[i] is the finish time of 
//  meeting i. Return the maximum number of meetings 
//  that can be accommodated in a single meeting 
//  room, when only one meeting can be held in the 
//  meeting room at a particular time. 

// Note: The start time of one chosen meeting 
// can't be equal to the end time of the other 
// chosen meeting.

// Examples :
// Input: start[] = [1, 3, 0, 5, 8, 5], end[] =  [2, 4, 6, 7, 9, 9]
// Output: 4
// Explanation: Maximum four meetings can be held 
// with given start and end timings. The meetings 
// are - (1, 2), (3, 4), (5,7) and (8,9)


// my arroach : first we to sort the start and 
// end time with fix time both input Array. of meeting after it start it end
// time like end = 2, start = 1 then [1,2]
// previous meeting time should we less starting time of next meeting

function maxMeetings(start, end) {
    // Step 1: Combine start and end times into a list of meetings
    let meetings = [];
    for (let i = 0; i < start.length; i++) {
        meetings.push({ start: start[i], end: end[i] });
    }

    // Step 2: Sort meetings by end time
    meetings.sort((a, b) => a.end - b.end);

    // Step 3: Select meetings
    let count = 0; // Keep track of the number of meetings
    let lastEndTime = 0; // End time of the last selected meeting

    for (let meeting of meetings) {
        // If the meeting starts after the last meeting ends, pick it
        if (meeting.start > lastEndTime) {
            count++;
            lastEndTime = meeting.end; // Update the last meeting's end time
        }
    }

    return count;
}

// Example Usage
let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 6, 7, 9, 9];
console.log(maxMeetings(start, end)); // Output: 4
