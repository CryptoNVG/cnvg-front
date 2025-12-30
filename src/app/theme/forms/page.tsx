"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHero } from "@/components/layout/SectionHero";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Radio } from "@/components/ui/Radio";
import { Button } from "@/components/ui/Button";

export default function FormsPage() {
  const [radioValue, setRadioValue] = useState("option2");
  
  return (
    <>
      <SectionHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Theme", href: "/theme" },
        ]}
        title="Forms"
        description="Form components including inputs, textareas, selects, checkboxes, and radio buttons."
      />
      
      <Section title="Forms" description="This is the forms section. It contains input fields, textareas, selects, checkboxes, and radio buttons.">
        <div className="px-4 md:px-6">
          {/* Input Fields */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Input Fields</h3>
            <div className="space-y-6 max-w-md">
              <Input 
                label="Default Input"
                placeholder="Enter text here"
              />
              <Input 
                label="Input with Helper Text"
                placeholder="Enter your email"
                helperText="We'll never share your email with anyone else."
              />
              <Input 
                label="Required Input"
                placeholder="Enter text here"
                required
              />
              <Input 
                label="Input with Character Limit"
                placeholder="Max 50 characters"
                maxLength={50}
                helperText="Enter up to 50 characters"
              />
              <Input 
                label="Input with Error"
                placeholder="Enter text here"
                error="This field is required"
                defaultValue="invalid value"
              />
              <Input 
                placeholder="Input without label"
              />
              <Input 
                label="Disabled Input"
                placeholder="Cannot edit this"
                disabled
              />
            </div>
          </div>

          {/* Input Types */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Input Types</h3>
            <div className="space-y-6 max-w-md">
              <Input 
                label="Email Input"
                type="email"
                placeholder="example@email.com"
                helperText="Enter your email address"
              />
              <Input 
                label="Password Input"
                type="password"
                placeholder="Enter your password"
                helperText="Password must be at least 8 characters"
              />
              <Input 
                label="Number Input"
                type="number"
                placeholder="Enter a number"
                helperText="Enter any number"
              />
              <Input 
                label="Date Input"
                type="date"
                helperText="Select a date"
              />
              <Input 
                label="Time Input"
                type="time"
                helperText="Select a time"
              />
              <Input 
                label="Date & Time Input"
                type="datetime-local"
                helperText="Select date and time"
              />
              <Input 
                label="URL Input"
                type="url"
                placeholder="https://example.com"
                helperText="Enter a valid URL"
              />
            </div>
          </div>

          {/* Textarea */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Textarea</h3>
            <div className="space-y-6 max-w-md">
              <Textarea 
                label="Default Textarea"
                placeholder="Enter your message here"
              />
              <Textarea 
                label="Textarea with Helper Text"
                placeholder="Describe your issue"
                helperText="Please provide as much detail as possible."
              />
              <Textarea 
                label="Required Textarea"
                placeholder="Enter your message here"
                required
              />
              <Textarea 
                label="Textarea with Character Limit"
                placeholder="Max 200 characters"
                maxLength={200}
                helperText="Enter up to 200 characters"
              />
              <Textarea 
                label="Textarea with Min Lines (3 lines)"
                placeholder="Minimum 3 lines"
                minLines={3}
                helperText="This field has minimum 3 lines"
              />
              <Textarea 
                label="Textarea with Min Lines (5 lines)"
                placeholder="Minimum 5 lines"
                minLines={5}
                helperText="This field has minimum 5 lines"
              />
              <Textarea 
                label="Textarea with Error"
                placeholder="Enter text here"
                error="Message is too short"
                defaultValue="Short"
              />
            </div>
          </div>

          {/* Select */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Select</h3>
            <div className="space-y-6 max-w-md">
              <Select 
                label="Default Select"
                placeholder="Choose an option"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />
              <Select 
                label="Select with Helper Text"
                placeholder="Select a country"
                helperText="Choose your country of residence"
                options={[
                  { value: "ge", label: "Georgia" },
                  { value: "us", label: "United States" },
                  { value: "uk", label: "United Kingdom" },
                ]}
              />
              <Select 
                label="Required Select"
                placeholder="Choose an option"
                required
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />
              <Select 
                label="Select with Error"
                placeholder="Choose an option"
                error="Please select an option"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                ]}
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Checkbox</h3>
            <div className="space-y-4 max-w-md">
              <Checkbox 
                label="Default Checkbox"
              />
              <Checkbox 
                label="Checked Checkbox"
                defaultChecked
              />
              <Checkbox 
                label="Disabled Checkbox"
                disabled
              />
              <Checkbox 
                label="Checkbox with Error"
                error="You must accept the terms"
              />
            </div>
          </div>

          {/* Radio */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Radio Buttons</h3>
            <div className="space-y-6 max-w-md">
              <Radio 
                name="example1"
                label="Default Radio Group"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />
              <Radio 
                name="example2"
                label="Radio Group with Selected Value (Controlled)"
                value={radioValue}
                onChange={(e) => setRadioValue(e.target.value)}
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />
              <Radio 
                name="example3"
                label="Radio Group with Error"
                error="Please select an option"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                ]}
              />
            </div>
          </div>

          {/* Form Example */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Complete Form Example</h3>
            <div className="max-w-2xl">
              <div className="bg-card border border-zinc-800 rounded-2xl p-6 space-y-6">
                <h4 className="text-heading mb-4">Contact Form</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    label="First Name"
                    placeholder="John"
                    required
                  />
                  <Input 
                    label="Last Name"
                    placeholder="Doe"
                  />
                </div>
                <Input 
                  label="Email"
                  type="email"
                  placeholder="john.doe@example.com"
                  helperText="We'll use this to contact you"
                  required
                />
                <Select 
                  label="Subject"
                  placeholder="Select a subject"
                  required
                  options={[
                    { value: "general", label: "General Inquiry" },
                    { value: "support", label: "Support Request" },
                    { value: "feedback", label: "Feedback" },
                  ]}
                />
                <Textarea 
                  label="Message"
                  placeholder="Enter your message here"
                  rows={5}
                  required
                />
                <Checkbox 
                  label="I agree to the terms and conditions"
                  required
                />
                <div className="flex gap-4">
                  <Button label="Submit" color="green" />
                  <Button label="Cancel" variant="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

