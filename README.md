###ColorLlama###

ColorLLama is a game that allows you to test your color
comparison skills.
The game was originally developed to assist tv and film
industry professionals to be able to color match on the fly
more quickly and accurately.
The color difference and score function is a simple euclidean
distance function. The nuances of color comparison are not of 
particular concern.

###New As of 10/2022###
Feature flag implementation via Launch Darkly

The flagManagement, showBanner, and makeid functions are new 
to leverage featureFlags. The flagManagement tag listens for
the Launch Darkly platform feature flag and renders a simple
banner according to the value returned from the platform 
(showBanner function). makeid is for userID randomization, but it not used in the current iteration.