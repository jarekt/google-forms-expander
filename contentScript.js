class TogglableWidth
{
    constructor()
    {
        this.pageInitial = "placeholderReee";
        this.fieldInitial = "placeholderReee";
    }

    ToggleField()
    {
        var textfields = document.getElementsByClassName("freebirdFormviewerComponentsQuestionTextTextInput");
        var value = "100%";

        if (this.fieldInitial == "placeholderReee")
        {
            this.fieldInitial = textfields[0].style.width;
        }
        else
        {
            value = this.fieldInitial;
            this.fieldInitial = "placeholderReee";
        }

        Array.from(textfields).forEach(function(textfield)
        {
            textfield.style.width = value;
        });

        return this;
    }

    TogglePage()
    {
        var pages = document.getElementsByClassName("freebirdFormviewerViewCenteredContent");
        var value = "100%";

        if (this.pageInitial == "placeholderReee")
        {
            this.pageInitial = pages[0].style.width;
        }
        else
        {
            value = this.pageInitial;
            this.pageInitial = "placeholderReee";
        }
        

        Array.from(pages).forEach(function(page)
        {
            page.style.width = value;
            page.style['max-width'] = "98%";
        });

        return this;
    }
}

toggler = new TogglableWidth;
toggler.ToggleField().TogglePage();