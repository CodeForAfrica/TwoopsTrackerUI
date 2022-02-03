---
title: Explore
date: 2022-02-01T12:32:44.448Z
searchGuide:
  title: How to search
  description: >-
    For search, the tool we use for full text search supports popular web based <br>
    search syntax (aptly named websearch) We've decided to stick with it, since  
    it gives us superior results to our in-house custom syntax. <br /><br />


    Therefore, the following should work as expected: <br /><br />


    Logical AND <br />

    The fat rats => Should return all tweets with 'fat', 'rats' as individual words

    This is the default operator when more than one word is given. There is no need to specify it.<br /><br />


    Logical OR<br />

    "sad cat" or "fat rat" => This should return tweets with 'sad cat' or 'fat rat' or both

    For multiple OR

    'sad' or 'cat' or 'rat' => This returns tweets with 'sad' or 'cat' or 'rat'.

    This has to be specified if logical AND shouldn't be assumed. <br /><br />


    Logical NOT<br />

    "supernovae stars" -crab => Returns all tweets with 'supernovae' and 'stars' but no 'crab'<br />

    This is supported by prepending - to the word to exclude.
---
