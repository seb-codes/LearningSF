({
	myAction : function(component, event, helper) {
		var action = component.get('c.getAccounts'); //the variable "action" is linked up to the method "getAccounts" in our apex class
        var rid = component.get('v.recordId'); //the variable "rid" is linked up to force:hasRecordId, or the current record we are looking at
        action.setParams({acc_id : rid}); //setting a param for "acc_id" to equal "rid" for the method "getAccounts" that is linked to "action"
        action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set('v.return_response', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
	}
)
