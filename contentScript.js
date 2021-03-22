class TogglableWidth
{
    constructor()
    {
        this.page = ["freebirdFormviewerViewCenteredContent", "width", "100%"];
        this.pageBorder = ["freebirdFormviewerViewCenteredContent", "max-width", "98%"];
        this.field = ["freebirdFormviewerComponentsQuestionTextTextInput", "width", "100%"];
    }

    applyValue([cssClass, field, value]) // returns previous value
    {
        console.log(cssClass);
        console.log(field);
        var elements = document.getElementsByClassName(cssClass);
        var previousValue = elements[0].style[field];
        Array.from(elements).forEach(function(element)
        {
            element.style[field] = value;
        });

        return previousValue;
    }
}

toggler = new TogglableWidth();
toggler.applyValue(toggler.page);
toggler.applyValue(toggler.pageBorder);
toggler.applyValue(toggler.field);