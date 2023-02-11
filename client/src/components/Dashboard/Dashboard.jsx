import React, { useState } from "react";
import { Background } from "../Background/Background";
import { Navbar } from "../Navbar/Navbar";
import { Editor } from "@tinymce/tinymce-react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { submitApplication } from "../../api";

export const Dashboard = () => {
  const [content, setContent] = useState(null);
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    const userId = localStorage.getItem("userId");
    if (content && date && userId) {
      e.preventDefault();
      const data = {
        date: new Date(date.$d),
        content,
        userId,
      };
      submitApplication(data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="isolate bg-white">
      <Background />
      <Navbar />
      <main>
        <div className="mx-auto py-25 mt-[3rem] sm:py-25 lg:py-25 w-[43%]">
          <div className="text-center">
            <h6 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Leave Application
            </h6>
            <div className="flex justify-start date-picker-custom">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="w-[100%]"
                  label="Select a date"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center items-center mt-2"
            >
              <Editor
                value={content}
                init={{
                  height: 300,
                  width: "100%",
                  menubar: false,
                }}
                onEditorChange={(e) => setContent(e)}
              />
              <br />
            </form>
            <div className="flex justify-end mt-2">
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ ml: "auto" }}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
