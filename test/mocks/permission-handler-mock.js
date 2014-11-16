var PermissionHandlerMock = function() {
	this.nextUserValidationResult = true;
	this.lastUserValidationQueryArgs = null;
	this.nextCanPerformActionResult = true;
	this.lastCanPerformActionQueryArgs = null;
};

PermissionHandlerMock.prototype.isValidUser = function( handshakeData, authData, callback ) {
	this.lastUserValidationQueryArgs = arguments;
	if( this.nextUserValidationResult === true ) {
		callback( null, 'test-user' );
	} else {
		callback( 'Invalid User' );
	}
};

PermissionHandlerMock.prototype.canPerformAction = function( username, message, callback) {
	this.lastCanPerformActionQueryArgs = arguments;
	if( typeof this.nextCanPerformActionResult === 'string' ) {
		callback( this.nextCanPerformActionResult );
	} else {
		callback( null, this.nextCanPerformActionResult );
	}
};

module.exports = new PermissionHandlerMock();