import nextpy as xt


class SlotState(xt.State):
    design = ""

    def design_o(self):
        self.design = "hidden"

    
    


def time_slot_button(time):
    return xt.box(
        xt.box(
            xt.text(time,class_name="font-bold text-sky-500"),
            class_name=f"w-44 h-12 p-3 border {SlotState.design} border-sky-500 rounded-md hover:border-solid hover:border-sky-600  transition-all duration-400",
            on_click=SlotState.design_o
        ),
        class_name="m-20"
    )

def index() -> xt.Component:
    return xt.box(
        time_slot_button("11:10")
    )

# Global styles defined as a Python dictionary
style = {
    "text_align": "center",  
}


app = xt.App(style=style)
app.add_page(index)
