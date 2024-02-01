import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

export const CreateOrganization = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Organization</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6">
            <div className="flex">
              <Button variant="outline" size="lg">
                <Upload className="h-4 w-4" />
              </Button>
              <div className="ml-4">
                <Label>Profile image</Label>
                <br />
                <p className="text-slate-400 text-xs">Upload image</p>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Organization name</Label>
              <Input id="name" placeholder="Input your organization name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="slug">Slug URL</Label>
              <Input
                id="slug"
                placeholder="Input slut URL"
                value={"test"}
                className="outline-none"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-row-reverse">
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
};
