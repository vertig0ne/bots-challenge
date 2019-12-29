import service from "../service/name.service";

export const get = (req: any, res: any, next: any) => {
  try {
    const name = req.query.name;
    const count = service.occurances(name, false);
    res.json({ name, count });
  } catch (err) {
    next(err);
  }
};

export default { get };
