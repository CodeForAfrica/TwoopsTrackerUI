---
title: Explore
date: 2022-02-01T10:15:37.227Z
searchGuide:
  title: How to Search
  description: >-
    For search, the tool we use for full text search supports popular web based
    search syntax (aptly named websearch) We've decided to stick with it, since
    it gives us superior results to our in-house custom syntax.


    Therefore, the following should work as expected:


    Logical AND


    The fat rats => Should return all tweets with 'fat', 'rats' as individual words

    This is the default operator when more than one word is given. There is no need to specify it.


    Logical OR


    "sad cat" or "fat rat" => This should return tweets with 'sad cat' or 'fat rat' or both


    For multiple OR


    'sad' or 'cat' or 'rat' => This returns tweets with 'sad' or 'cat' or 'rat'.

    This has to be specified if logical AND shouldn't be assumed.


    Logical NOT


    "supernovae stars" -crab => Returns all tweets with 'supernovae' and 'stars' but no 'crab'

    This is supported by prepending - to the word to exclude.
---
